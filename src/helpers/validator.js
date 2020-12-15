const validModel = (model) => {
    for (let property in model) {
        if (model[property] === "" ||
            model[property] === null) {
            return {
                field: String(property),
                status: false
            }
        }
    }

    return {
        field: "",
        status: true
    };
}

export { validModel }