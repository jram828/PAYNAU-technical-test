import { server } from "../../../server.js";
import session from "supertest";

const agent = session(server);

// console.log("Agent:", agent.post);

describe("Routes test:", () => {
  describe("Personal information storage and management", () => {
    xit("POST /person. Should register the information of a person and return an object with: activo, Nombres, Apellidos, Identificacion, Direccion, Email, Telefono y Edad.", async () => {
      const response = await agent
      .post("/person")
      .send({Nombres:"Luisa Maria", Apellidos:"Cardenas",Identificacion:"45632104",Telefono:"3154269870",Edad:"46", Direccion:"Calle 10 # 5 - 60",Email:"jram828@gmail.com"});
       
      // console.log("response post:", response.body);
      expect(response.body).toHaveProperty(
        "activo" &&
          "Nombres" &&
          "Apellidos" &&
          "Identificacion" &&
          "Email" &&
          "Telefono" &&
          "Edad" &&
          "Direccion"
      );
    });

    xit("POST /person. If there is an error in the provided information, it returns 'Missing data or wrong input data'", async () => {
      const response = await agent.post("/person")
      .send({Nombres:"Julian Rodrigo", Identificacion:"71366468",Edad:"41", Direccion:"Calle 8 # 3 - 33",Email:"jram828@gmail.com"});
      expect(JSON.parse(response.text)).toBe("Missing data or wrong input data");
    });

    xit('GET /person. Returns an array with people information', async () => {
      const response = await agent.get("/person");
      //  console.log('response:', response)
      expect(Array.isArray(response.body)).toBe(true)
    });

    xit("GET /person. Returns an empty array when there is no people in database", async () => {
      const response = await agent
        .get("/person");

        expect(response.body.length).toBe(0);
    });

    xit('PUT /person. It the information is updated, it returns "Updated person"', async () => {
      const response = await agent
      .put("/person")
      .send({Nombres:"Julian Rodrigo", Apellidos:"Arango Mesa",Identificacion:"71366468",Telefono:"3159874523",Edad:"52", Direccion:"Calle 10 # 3 - 50",Email:"jram828@gmail.com"});

      // console.log("response:", response);

      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.text)).toBe("Updated person");
    });

    xit('DELETE/person/:Identificacion. It the person is deleted, it returns "Deleted Person"', async () => {
      const response = await agent
        .delete("/person/71366468")
      // console.log("response:", response);

      expect(response.status).toBe(200);
      expect(JSON.parse(response.text)).toBe("Deleted");
    });

    it('DELETE/person/:Identificacion. It the identification does not exist, it returns "Not possible to delete"', async () => {
      const response = await agent
        .delete("/person/1111111111")
       console.log("response:", response.text);

       expect(response.status).toBe(404);
       expect(JSON.parse(response.text)).toBe("Not possible to delete");
    });
  });
});
