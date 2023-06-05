import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("userName")
export class LoginEntity {
    @PrimaryGeneratedColumn()
   id: Number;
   @Column()
   name: String;
   @Column()
   email: String; 
}

