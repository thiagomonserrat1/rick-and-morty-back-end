import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelations1659026874116 implements MigrationInterface {
    name = 'CreateRelations1659026874116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "favorites" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "char_id" integer NOT NULL, "name" character varying(255) NOT NULL, "status" character varying(20) NOT NULL, "species" character varying(70) NOT NULL, "type" character varying(70) NOT NULL, "gender" character varying(30) NOT NULL, "origin" json NOT NULL, "location" json NOT NULL, "image" character varying NOT NULL, "episode" character varying array NOT NULL, "url" character varying NOT NULL, "created" character varying NOT NULL, CONSTRAINT "UQ_da7dc334fc8117ec0233d16b57b" UNIQUE ("char_id"), CONSTRAINT "PK_890818d27523748dd36a4d1bdc8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_favorites_favorites" ("userId" uuid NOT NULL, "favoritesId" uuid NOT NULL, CONSTRAINT "PK_51619ce0b0a134162bacbb048db" PRIMARY KEY ("userId", "favoritesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_583a7773e01a46578167f6c9e3" ON "user_favorites_favorites" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3dd89a9d3feedd8344269ea85b" ON "user_favorites_favorites" ("favoritesId") `);
        await queryRunner.query(`ALTER TABLE "user_favorites_favorites" ADD CONSTRAINT "FK_583a7773e01a46578167f6c9e35" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_favorites_favorites" ADD CONSTRAINT "FK_3dd89a9d3feedd8344269ea85b9" FOREIGN KEY ("favoritesId") REFERENCES "favorites"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_favorites_favorites" DROP CONSTRAINT "FK_3dd89a9d3feedd8344269ea85b9"`);
        await queryRunner.query(`ALTER TABLE "user_favorites_favorites" DROP CONSTRAINT "FK_583a7773e01a46578167f6c9e35"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3dd89a9d3feedd8344269ea85b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_583a7773e01a46578167f6c9e3"`);
        await queryRunner.query(`DROP TABLE "user_favorites_favorites"`);
        await queryRunner.query(`DROP TABLE "favorites"`);
    }

}
