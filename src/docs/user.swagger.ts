export const userDefinition = {
  User: {
    type: "object",
    required: ["username", "password", "email"],
    properties: {
      username: {
        type: "string",
      },
      password: {
        type: "string",
      },
      email: {
        type: "string",
      },
    },
    example: {
      username: "test",
      password: "test",
      email: "test@test.test",
    },
  },
};

export const userApi = {
  "/user": {
    get: {
      description: "Returns all Users from the system.",
      produces: ["application/json"],
      operationId: "getAllUsers",
      tags: ["User"],
      responses: {
        200: {
          description: "List of users.",
          schema: {
            type: "array",
            items: {
              $ref: "#/components/schemas/User",
            },
          },
        },
      },
    },
    post: {
      description: "Create a user.",
      produces: ["application/json"],
      operationId: "createUser",
      tags: ["User"],
      requestBody: {
        required: true,
        description: "User object that needs to be added",
        content: {
          "application/x-www-form-urlencoded": {
            type: "object",
            schema: {
              $ref: "#/components/schemas/User",
            },
          },
        },
      },
      responses: {
        200: {
          description: "User created.",
        },
      },
    },
  },
  "/user/{username}": {
    get: {
      description: "Returns User with given username.",
      produces: ["application/json"],
      operationId: "getUserByUsername",
      tags: ["User"],
      parameters: [
        {
          name: "username",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
          description: "username",
        },
      ],
      responses: {
        200: {
          description: "user.",
          schema: {
            $ref: "#/components/schemas/User",
          },
        },
      },
    },
    put: {
      description: "Update a user.",
      produces: ["application/json"],
      operationId: "updateUser",
      tags: ["User"],
      parameters: [
        {
          name: "username",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
          description: "username",
        },
      ],
      requestBody: {
        required: true,
        description: "User object that needs to be added",
        content: {
          "application/x-www-form-urlencoded": {
            type: "object",
            schema: {
              $ref: "#/components/schemas/User",
            },
          },
        },
      },
      responses: {
        200: {
          description: "User updated.",
        },
      },
    },
    delete: {
      description: "Delete a user.",
      produces: ["application/json"],
      operationId: "deleteUser",
      tags: ["User"],
      parameters: [
        {
          name: "username",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
          description: "username",
        },
      ],
      responses: {
        200: {
          description: "User deleted.",
        },
      },
    },
  },
};
