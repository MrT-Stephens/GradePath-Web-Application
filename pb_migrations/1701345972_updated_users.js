/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5cvwylbl7be3rdd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pv9m3c3m",
    "name": "userDoB",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5cvwylbl7be3rdd")

  // remove
  collection.schema.removeField("pv9m3c3m")

  return dao.saveCollection(collection)
})
