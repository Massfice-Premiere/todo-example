const mapResponse = (todo) => {
    const { _id, description, isCompleted } = todo;

    return {
        id: _id,
        description,
        isCompleted
    };
}

module.exports = (TodoModel) => ({
    getAll: async (req, res) => {
        const todos = (await TodoModel.find()).map(mapResponse);

        return res.send(todos);
    }
});
