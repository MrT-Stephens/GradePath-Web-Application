/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "483v4y00o510r5p",
    "created": "2023-11-19 11:07:10.628Z",
    "updated": "2023-11-19 11:07:10.628Z",
    "name": "courseGradeRequirement",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8pd358lf",
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
        "id": "pemcfuno",
        "name": "gradeRequirement",
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
  const collection = dao.findCollectionByNameOrId("483v4y00o510r5p");

  return dao.deleteCollection(collection);
})
