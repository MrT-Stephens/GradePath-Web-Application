/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("huirzskphvupkq2")

  // remove
  collection.schema.removeField("76ughrma")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "abutsl4f",
    "name": "userID",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "5cvwylbl7be3rdd",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("huirzskphvupkq2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "76ughrma",
    "name": "userID",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("abutsl4f")

  return dao.saveCollection(collection)
})
