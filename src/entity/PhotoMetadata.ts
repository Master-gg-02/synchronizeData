import { Entity, Column, OneToOne, JoinColumn, ObjectIdColumn, Index } from "typeorm";
import { Photo } from "./Photo";
// @Index('prifix-photo')
@Entity()
export class PhotoMetadata {
  @ObjectIdColumn()
  id: number;

  @Column("int")
  height: number;

  @Column("int")
  width: number;

  @Column()
  orientation: string;

  @Column()
  compressed: boolean;

  @Column()
  comment: string;

  @OneToOne(type => Photo)
  @JoinColumn()
  photo: Photo;
}
