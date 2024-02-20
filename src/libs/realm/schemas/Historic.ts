import { Realm } from '@realm/react';

export class Historic extends Realm.Object<Historic> {
  static generate(){
    //aqui é o método que utilizamos para definir o schema
  }

  static schema = {
    //aqui é onde fica a estrutura que vai ser armazenada no banco
    //lembrando que os tipos abaixo são do realmDB
    name: 'Historic',
    primaryKey: '_id',

    properties: {
      _id: 'uuid', 
      user_id: {
        type: 'string',
        indexed: true,
      },
      license_plate: 'string',
      description: 'string',
      status: 'string',
      created_at: 'date',
      updated_at: 'date',
    }
  }

}