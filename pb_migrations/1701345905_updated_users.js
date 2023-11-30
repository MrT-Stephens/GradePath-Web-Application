/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5cvwylbl7be3rdd")

  // remove
  collection.schema.removeField("f6gc1ax8")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5cvwylbl7be3rdd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f6gc1ax8",
    "name": "userDoB",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
