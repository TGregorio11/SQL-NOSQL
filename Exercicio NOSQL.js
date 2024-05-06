db.alunos.insertMany([
    {
        "nome": "Fábio",
        "nota": 7,
        "curso": "QA"
    },
    {
        "nome": "Alice",
        "nota": 9,
        "curso": "SQL"
    },
    {
        "nome": "Mariana",
        "cargo": "Professora",
        "curso": [
            "QA",
            "FrontEnd",
            "MongoDB"
        ]
    },
    {
        "nome": "João",
        "nota": 7,
        "curso": "QA"
    },
    {
        "nome": "Paulo",
        "nota": 5,
        "curso": "Dev"
    },
    {
        "nome": "Maria",
        "nota": 8,
        "curso": "QA"
    },
    {
        "nome": "José",
        "nota": 4,
        "curso": "SQL"
    },
    {
        "nome": "Ana",
        "nota": 9,
        "curso": "QA"
    },
    {
        "nome": "José Pedro",
        "nota": 7,
        "curso": "UX"
    }
])

1.	Selecione todos os dados da Collection Alunos, ordenando o nome em ordem alfabética.

db.alunos.find({}).sort({nome: 1
})

{
    _id: ObjectId('6627bc551bc94ef50087517e'),
    nome: 'Alan',
    nota: 'Professor',
    curso: 'QA'
}
{
    _id: ObjectId('6627bc551bc94ef50087517d'),
    nome: 'Alice',
    nota: 9,
    curso: 'SQL'
}
{
    _id: ObjectId('6627c9181bc94ef500875187'),
    nome: 'Ana',
    nota: 9,
    curso: 'QA'
}
{
    _id: ObjectId('6627c9181bc94ef500875180'),
    nome: 'Fábio',
    nota: 7,
    curso: 'QA'
}
{
    _id: ObjectId('6627c9181bc94ef500875186'),
    nome: 'José',
    nota: 4,
    curso: 'SQL'
}
{
    _id: ObjectId('6627c9181bc94ef500875188'),
    nome: 'José Pedro',
    nota: 7,
    curso: 'UX'
}
{
    _id: ObjectId('6627c9181bc94ef500875183'),
    nome: 'João',
    nota: 7,
    curso: 'QA'
}
{
    _id: ObjectId('6627c9181bc94ef500875185'),
    nome: 'Maria',
    nota: 8,
    curso: 'QA'
}
{
    _id: ObjectId('6627c9181bc94ef500875182'),
    nome: 'Mariana',
    cargo: 'Professora',
    curso: [
      'QA',
      'FrontEnd',
      'MongoDB'
    ]
}
{
    _id: ObjectId('6627c9181bc94ef500875184'),
    nome: 'Paulo',
    nota: 5,
    curso: 'Dev'
}

2.	Selecione todos os alunos do curso de SQL.

db.alunos.find({
    $and: [
        {curso: "SQL"
        }
    ]
})
{
    _id: ObjectId('6627bc551bc94ef50087517d'),
    nome: 'Alice',
    nota: 9,
    curso: 'SQL'
}
{
    _id: ObjectId('6627c9181bc94ef500875186'),
    nome: 'José',
    nota: 4,
    curso: 'SQL'
}

3.	Selecione todos os alunos com “nota maior e igual a 6” e “do curso de QA”.

db.alunos.find({
    $and: [
        {nota: "$gte6"
        },
        {curso: "QA"
        }
    ]
})

  4.	Selecione todos os alunos que tem a palavra “Pedro” no nome.

  db.alunos.find({nome: /Pedro/
})
  {
    _id: ObjectId('6627cf081bc94ef500875191'),
    nome: 'José Pedro',
    nota: 7,
    curso: 'UX'
}