import client from "axios";

const api = "https://jsonplaceholder.typicode.com";

export const getPostsList = () => client.get(api + "/posts");

export const createPost = () => client.post(api + "/posts");
//export const EditingPost = () => client.edit(api + "/posts");

export const getPost = (id) => client.get(api + "/posts/" + id);

export const putPost = (data) =>
  client.put(api + "/posts/" + data.id, data.body);

export const deletePost = (id) => client.delete(api + "/posts/" + id);

export const editPost = (id) => client.edit(api + "/posts/" + id);