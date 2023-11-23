/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("huirzskphvupkq2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jd5wmq7y",
    "name": "gradeMark",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f41onwri",
    "name": "gradeLevelofStudy",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("huirzskphvupkq2")

  // remove
  collection.schema.removeField("jd5wmq7y")

  // remove
  collection.schema.removeField("f41onwri")

  // remove
  collection.schema.removeField("76ughrma")

  return dao.saveCollection(collection)
})
