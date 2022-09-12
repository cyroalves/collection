const { validate: isUuid } = require("uuid");
const Material = require("../models/Material");

module.exports = {
  async getMaterial(req, res, next) {
    const { id } = req.params;

    if (!isUuid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    try {
      const material = await Material.findById(id);
      res.material = material;
      if (!material) {
        return res.status(404).json({ error: "Material not found" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }

    next();
  },
};
