const getFull = (relResource) => {
  const mode = import.meta.env.MODE;
  if (mode === "production") {
    return "/" + relResource;
  } else {
    return "http://localhost:3000/" + relResource;
  }
};

const fetch2 = async (relResource, method, data) => {
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
  // https://developer.mozilla.org/en-US/docs/Web/API/RequestInit
  try {
    const response = await fetch(getFull(relResource), {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    
    // every response from the server should
    // return a message field in the object
    const jsonstuff = await response.json();
    
    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      ...jsonstuff,
    };
  } catch (err) {
    return {
      ok: false,
      message: err.stack,
      status: 400,
      statusText: "Bad Request"
    };
  }
};

export default {
  category: {
    getAll: async () => await fetch2("categories/", "GET"),
    insert: async (name, background_colour) => await fetch2("categories/", "POST", { name, background_colour }),
    delete: async (id) => await fetch2(`categories/${id}`, "DELETE"),
  },
  items: {
    getAll: async () => await fetch2("items/", "GET"),
  },
};