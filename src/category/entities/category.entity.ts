 
import { EntityBase } from "src/base/base.entity";
import { Column, Entity } from "typeorm";

@Entity("userName")
export class Category extends EntityBase{
   
   @Column()
   name: String;
   @Column()
   email: String; 
}