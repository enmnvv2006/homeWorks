import "./ViewUsers.css";

const users = [
  {
    id: 1,
    name: "Алина",
    age: 17,
    city: "Бишкек",
    profession: "Дизайнер",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Тимур",
    age: 19,
    city: "Ош",
    profession: "Разработчик",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Айдана",
    age: 18,
    city: "Алматы",
    profession: "Маркетолог",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Нурбек",
    age: 21,
    city: "Астана",
    profession: "Фотограф",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "София",
    age: 20,
    city: "Ташкент",
    profession: "SMM-специалист",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Данияр",
    age: 22,
    city: "Бишкек",
    profession: "Аналитик",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Элина",
    age: 16,
    city: "Ош",
    profession: "Студент",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Арсен",
    age: 23,
    city: "Алматы",
    profession: "Менеджер",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Мадина",
    age: 18,
    city: "Астана",
    profession: "Копирайтер",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Руслан",
    age: 24,
    city: "Ташкент",
    profession: "Инженер",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 11,
    name: "Камила",
    age: 19,
    city: "Бишкек",
    profession: "UX/UI дизайнер",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 12,
    name: "Амир",
    age: 20,
    city: "Ош",
    profession: "Frontend-разработчик",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 13,
    name: "Диана",
    age: 22,
    city: "Алматы",
    profession: "HR-специалист",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 14,
    name: "Ильяс",
    age: 21,
    city: "Астана",
    profession: "Backend-разработчик",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 15,
    name: "Жанара",
    age: 23,
    city: "Ташкент",
    profession: "Project Manager",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 16,
    name: "Максат",
    age: 25,
    city: "Бишкек",
    profession: "DevOps-инженер",
    avatar: "https://i.pravatar.cc/150?img=16",
  },
  {
    id: 17,
    name: "Аружан",
    age: 18,
    city: "Ош",
    profession: "Иллюстратор",
    avatar: "https://i.pravatar.cc/150?img=17",
  },
  {
    id: 18,
    name: "Бекзат",
    age: 20,
    city: "Алматы",
    profession: "QA-инженер",
    avatar: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: 19,
    name: "Мээрим",
    age: 19,
    city: "Астана",
    profession: "Контент-менеджер",
    avatar: "https://i.pravatar.cc/150?img=19",
  },
  {
    id: 20,
    name: "Самат",
    age: 24,
    city: "Ташкент",
    profession: "Data Analyst",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
];



const ViewUsers = () => {
  const handleClick = (user) => {
    console.log(user);
  };

  return (
    <div className="users">
      {users.map((user, index) => {
        return (
          <div onClick={() => handleClick(user)} className="user" key={user.id}>
            <img src={user.avatar} alt="avatarka" />
            <h3>{user.name}</h3>
            <p>{user.profession}</p>
            <div>
              <span>{user.age} лет </span>
              <span>{user.city}</span>
            </div>
            {index < 10 && <p>Премиум</p>}
          </div>
        );
      })}
    </div>
  );
};

export default ViewUsers;
