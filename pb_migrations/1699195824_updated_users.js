/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5cvwylbl7be3rdd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "buv2ycmg",
    "name": "firstname",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 255,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yz0nw2fm",
    "name": "lastname",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 255,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5cvwylbl7be3rdd")

  // remove
  collection.schema.removeField("buv2ycmg")

  // remove
  collection.schema.removeField("yz0nw2fm")

  return dao.saveCollection(collection)
})
