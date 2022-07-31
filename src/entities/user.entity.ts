import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Favorites } from "./favorite";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  created_at: Date;

  @ManyToMany(() => Favorites, { eager: true })
  @JoinTable()
  favorites: Favorites[];

  @Column()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
