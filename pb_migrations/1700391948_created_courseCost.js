/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "grvgh1wa8njggc3",
    "created": "2023-11-19 11:05:48.267Z",
    "updated": "2023-11-19 11:05:48.267Z",
    "name": "courseCost",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ezenxngd",
        "name": "courseID",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "955nnqvb2fvjomi",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "npddxqwl",
        "name": "costType",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5ryysto3",
        "name": "costAmount",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("grvgh1wa8njggc3");

  return dao.deleteCollection(collection);
})
