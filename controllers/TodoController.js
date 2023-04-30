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
        if (!TodoModel) {
            return res.sendStatus(500);
        }

        let fetchedTodos = await TodoModel.find();

        if (!fetchedTodos || !fetchedTodos.length) {
            fetchedTodos = [{
                _id: '123',
                description: 'Make world awsome',
                isCompleted: false
            }]
        }

        const todos = (fetchedTodos).map(mapResponse);

        return res.send(todos);
    }
});
