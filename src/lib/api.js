const getFull = (relResource) => {
  const mode = import.meta.env.MODE;
  if (mode === "production") {
    return "/" + relResource;
  } else {
    return "http://localhost:3000/" + relResource;
  }
};

const fetchJSON = async (relResource, method, data) => {
  try {
    
    const response = await fetch(getFull(relResource), {
      method,
      body: (data instanceof FormData) ? data : JSON.stringify(data),
      headers: (data instanceof FormData) ? {} : {
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

const getBlob = async (relResource) => {
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
  // https://developer.mozilla.org/en-US/docs/Web/API/RequestInit
  try {
    const response = await fetch(getFull(relResource), {
      method: "GET",
      mode: "cors",
    });
  
    const blob = await response.blob();
    
    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      blob,
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
  reset: async () => await fetchJSON("reset/", "POST"),
  category: {
    getAll: async () => await fetchJSON("categories/", "GET"),
    insert: async (name, background_colour) => await fetchJSON("categories/", "POST", { name, background_colour }),
    delete: async (id) => await fetchJSON(`categories/${id}`, "DELETE"),
  },
  items: {
    getAll: async () => await fetchJSON("items/", "GET"),
    delete: async (id) => await fetchJSON(`items/${id}`, "DELETE"),
    insert: async (formData) => await fetchJSON("items/", "POST", formData),
    blob: async (src) => await getBlob(`items/blob/${src}`),
  },
};