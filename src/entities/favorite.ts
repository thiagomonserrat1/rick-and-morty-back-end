import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IOriginILocation } from "../interfaces/favorite";
import { v4 as uuid } from "uuid";

@Entity("favorites")
export class Favorites {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  char_id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 20 })
  status: string;

  @Column({ length: 70 })
  species: string;

  @Column({ length: 70 })
  type: string;

  @Column({ length: 30 })
  gender: string;

  @Column({ type: "json" })
  origin: IOriginILocation;

  @Column({ type: "json" })
  location: IOriginILocation;

  @Column()
  image: string;

  @Column("varchar", { array: true })
  episode: string[];

  @Column()
  url: string;

  @Column()
  created: string;
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
