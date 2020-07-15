import Sequilize from "sequelize";

export const parseFilter = (query) => {
    try {
        const apiFilter = JSON.parse(query.filter);
        query.filter = {[apiFilter.field]: {[Sequilize.Op[apiFilter.condition]]: apiFilter.value}};
    } catch (e) {
        console.error(e.message)
    }
};

