const { response } = require("express");
const { v4: uuid } = require("uuid");
const Material = require("../models/Material");
const connection = require('../models/mongoConnection.js')

module.exports = {
  async index(req, res) {
    try {
      const materials = await Material.find();
      console.log(materials)
      return res.status(200).json({ materials });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async store(req, res) {
    const { title, link, description, line } = req.body;

    if (!title || !link) {
      return res.status(400).json({ error: "Missing title or link." });
    }

    const material = new Material({
      _id: uuid(),
      title,
      link,
      description,
      line
    });

    try {
      await material.save();

      return res.status(201).json({ message: "Material added succesfully!" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    const { title, link } = req.body;

    if (!title && !link) {
      return res
        .status(400)
        .json({ error: "You must inform a new title or a new link" });
    }

    if(title) res.material.title = title;
    if(link) res.material.link = link;

    try {
      await res.material.save()
      return res.status(200).json({ message: "Material updated succesfully!" });
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  },

  async delete(req, res) {
    try {
      await res.material.remove();
      return res.status(200).json({ message: "Material removed succesfully!" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
