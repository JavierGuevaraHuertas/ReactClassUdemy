
import { useEffect, useState } from "react";
import Title from "../components/Title";
import { useFirestore } from "../hooks/useFirestore";
import Button from "../components/Button";
import { nanoid } from "nanoid";

const Home = () => {
    const {error, data, loading, getData, addData, deleteData, updateData} = useFirestore();
    const [text, setText] = useState("");
    const [newOriginID, setNewOriginID] = useState();

    useEffect(() => {
        console.log("getData")
        getData();
    }, []);

    if(loading.getData) return <p>Loading data...</p>
    if(error) return <p>{error}</p>

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(newOriginID){
            await updateData(newOriginID, text);
            setNewOriginID('');
            setText('');
            return;
        }

        await addData(text);
        setText("");
    }

    const handleClickDelete = async(nanoid) => {
        console.log('click delete');
        await deleteData(nanoid)
    }

    const handleClickEdit = async(item) => {
        console.log("click edit")
        setText(item.origin);
        setNewOriginID(item.nanoid);
    }

    return (
        <>
            <Title text="Home"/>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="ex: http://bluuweb.org" 
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                {
                    newOriginID ? (
                    <Button 
                    type="submit"
                    text="EDIT URL"
                    color="green"
                    loading={loading.updateDataData}
                    />
                    ) : (
                    <Button 
                    type="submit"
                    text="ADD URL"
                    color="blue"
                    loading={loading.addData}
                    />    
                    )
                }
            </form>

            {
                data.map((item) => (
                    <div key={item.nanoid}>
                        <p>{item.nanoid}</p>
                        <p>{item.origin}</p>
                        <p>{item.uid}</p>
                        <Button 
                        type="button"
                        text="Delete"
                        color="red"
                        loading={loading[item.nanoid]}
                        onClick={() => handleClickDelete(item.nanoid)}
                    />
                        <Button 
                        type="button"
                        text="Edit"
                        color="green"
                        onClick={() => handleClickEdit(item)}
                    />
                </div>
                ))
            }
        </>
    )
}

export default Home;