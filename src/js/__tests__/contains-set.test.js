import Team from "../contains-set";

class Character {
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this.level = level;
  }
}

const team = new Team();

let bowman = new Character('Лучник', 'Bowman', 1);
let magician = new Character('Маг', 'Magician', 2);
let archer = new Character('Друид', 'Archer', 3);
let dwarf = new Character('Гном', 'Вwarf', 4);

const data = [
  {
    name: "Лучник",
    type: "Bowman",
    level: 1,
  },
  {
    name: "Маг",
    type: "Magician",
    level: 2,
  },
  {
    name: "Друид",
    type: "Archer",
    level: 3,
  },
  {
    name: "Гном",
    type: "Вwarf",
    level: 4,
  },
];


test("Добавление героя", () => {
  team.add(bowman);
  expect(team.members.size).toBe(1)
})

test("Соответствие массивов", () => {
  team.addAll(
    magician,
    archer,
    dwarf
  );
  expect(team.toArray()).toEqual(data);
});

test("Добавление повторяющегося героя", () => {
  expect(() => {
    team.add(bowman)
  }).toThrow()
})

