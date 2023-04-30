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
            return res.status(500).send(['Todo Model is not initialized']);
        }

        const fetchedTodos = await TodoModel.find();

        return res.send(fetchedTodos.map(mapResponse));
    },

    create: async (req, res) => {
        if (!TodoModel) {
            return res.status(500).send(['Todo Model is not initialized']);
        }

        const {
            body: {
                description
            }
        } = req;

        
        if (typeof description === 'undefined') {
            return res.status(400).send(['description field should be provided']);
        }

        if (typeof description !== 'string') {
            return res.status(400).send(['description field should be string']);
        }

        const trimmedDescription = description.trim();

        if (!trimmedDescription.length) {
            return res.status(400).send(['description field should not be empty']);
        }

        const createdTodo = await TodoModel.create({
            description: trimmedDescription,
            isCompleted: false
        });

        return res.status(201).send(mapResponse(createdTodo));
    }
});
