/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "huirzskphvupkq2",
    "created": "2023-11-19 10:26:32.488Z",
    "updated": "2023-11-19 10:26:32.488Z",
    "name": "userGrade",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ffbpblal",
        "name": "gradeCourseName",
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
  const collection = dao.findCollectionByNameOrId("huirzskphvupkq2");

  return dao.deleteCollection(collection);
})
