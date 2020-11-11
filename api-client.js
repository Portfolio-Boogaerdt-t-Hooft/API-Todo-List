const apiUrl = `https://jsonbox.io/box_b0b4e20ceaeca4d91882/`;

//GET
const getToDoList = async () => {
    const result = await fetch(apiUrl);
    const json = await result.json();
    // console.log(json);
    return json;
}
getToDoList()

//POST
const postToDoList = async data => {
    const result = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await result.json()
    console.log(json);
}

// // PUT NIET NODIG!!!
// const updateTodoData = async (id, data, state) => {
//     const updateApi = `${apiUrl}${id}`
//     const result = await fetch(updateApi, {
//         method: "PUT",
//         body: JSON.stringify({ description: data, done: state }),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//     const json = await result.json()
//     console.log(json)
//     return json

// }

// DELETE
const deleteTodoData = async id => {
    const deleteApi = `${apiUrl}${id}`
    // console.log(deleteApi);
    const result = await fetch(deleteApi, {
        method: "DELETE",
    });
    const json = await result.json()
    // console.log(json)
    return json
}

// DELETE alles
const deleteAllTasks = async () => {
    const result = await fetch(apiUrl);
    const json = await result.json();
    json.forEach(item => deleteTodoData(item._id));
    // console.log(json);
}  