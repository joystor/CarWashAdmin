(function() {
	'use strict';
/*
  DB = new PouchDB('KRAKEN-TOCHO-DESK');

  Backbone.syncOrg = Backbone.sync;
  Backbone.sync =  BackbonePouch.sync({
    db: DB,
    listen: true,
    fetch: 'query'
  });
  _.extend(Backbone.Model.prototype, BackbonePouch.attachments());
  Backbone.Model.prototype.idAttribute = '_id';
  Backbone.Model.prototype.sync = BackbonePouch.sync({
    db: DB
  });

  DB.createNewModel = function(type){
    var defaultProp = {
      defaults: {
        fecha_reg: new Date(),
        type: type
      }
    }
    return Backbone.Model.extend(defaultProp);
  };

	DB.createConfCollection =  function(typeModelName){
		return {
      model: DB.createNewModel(typeModelName),
			parse: function(data) {
				return data.rows.map((o) => {
          return o.value;
        });
			},
      pouch: {
        options: {
          query: {
            include_docs: true,
            fun: {
              map: function(p, emit) {
                if(p.type === typeModelName){
                  emit(p._id,p);
                }
              }
            }
          },
          changes: {
            include_docs: true,
            filter: function(doc) {
              return doc._deleted || doc.type === typeModelName;
            }
          }
        }
      },
      comparator: function(m) {
    		return moment(m.get('fecha_reg'), 'DD/MM/YYYY, h:mm:ss a').toDate().getTime();
      }
    };
	};

  DB.createNewCollection = function(type){
    var conf = DB.createConfCollection(type);
    var coll = Backbone.Collection.extend( conf );
    return new coll();
  };

  DB.colls = {
    arbitros: DB.createNewCollection('arbitros')
  };

  DB.colls.arbitros.fetch();
*/

  /*
  var dd = new Date();
  var arb = new DB.colls.arbitros.model(
  {
    "id_arbitro":33,
    "nombre":"Juan Perez",
    "apodo":"juanpe",
    "torneos":[{
      "id_torneo":123566,
      "calificacion":3
      }
    ],
    "fecha_syn":null,
    "fecha_mod":dd
  });
  arb.save();
  DB.colls.arbitros.add(arb);
  */

})();
