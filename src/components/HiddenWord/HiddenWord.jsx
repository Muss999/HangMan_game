import React, { useState } from "react";
import Input from "../Input/Input";
import "./Hidden.css";

const HiddenWord = () => {
    const wordsForHangman = [
        "стол",
        "стул",
        "дом",
        "окно",
        "книга",
        "рука",
        "глаз",
        "нос",
        "ухо",
        "голова",
        "сердце",
        "рот",
        "кровь",
        "кость",
        "палец",
        "лес",
        "цветок",
        "поле",
        "река",
        "гора",
        "море",
        "озеро",
        "трава",
        "небо",
        "звезда",
        "солнце",
        "луна",
        "земля",
        "снег",
        "ветер",
        "дождь",
        "гроза",
        "птица",
        "рыба",
        "кошка",
        "собака",
        "лошадь",
        "корова",
        "слон",
        "тигр",
        "лев",
        "волк",
        "заяц",
        "волк",
        "кот",
        "пес",
        "медведь",
        "лиса",
        "жираф",
        "сова",
        "ворона",
        "чайка",
        "корабль",
        "парус",
        "автомобиль",
        "самолет",
        "велосипед",
        "поезд",
        "день",
        "ночь",
        "утро",
        "вечер",
        "лето",
        "осень",
        "зима",
        "весна",
        "год",
        "месяц",
        "час",
        "минута",
        "секунда",
        "книга",
        "карандаш",
        "ручка",
        "тетрадь",
        "школа",
        "учитель",
        "ученик",
        "компьютер",
        "телефон",
        "телевизор",
        "радио",
        "фотоаппарат",
        "смартфон",
        "микрофон",
        "молоко",
        "хлеб",
        "мясо",
        "рыба",
        "овощ",
        "фрукт",
        "вода",
        "чай",
        "кофе",
    ];
    const [randomWord, setRandomWrod] = useState(
        wordsForHangman[Math.floor(Math.random() * wordsForHangman.length)]
    );
    const [attempts, setAttempts] = useState(15);
    const [guessedLetters, setGuessedLetters] = useState([]);

    const handleGuess = (letter) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            if (!randomWord.includes(letter)) {
                setAttempts(attempts - 1);
            }
        }
    };

    const displayWord = () => {
        return randomWord
            .split("")
            .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
            .join(" ");
    };

    const isWordGuessed = () => {
        return randomWord
            .split("")
            .every((letter) => guessedLetters.includes(letter));
    };

    if (attempts === 0) {
        return (
            <div className="div1">
                <h1>
                    Вы проиграли!
                    <br />
                    Загаданное слово: <span className="span">{randomWord}</span>
                </h1>
                <form>
                    <button className="button1">Начать снова</button>
                </form>
            </div>
        );
    }

    if (isWordGuessed()) {
        return (
            <div className="div1">
                <h1>
                    Поздравляем, вы выиграли!
                    <br />
                    Загаданное слово: <span className="span">{randomWord}</span>
                </h1>
                <form>
                    <button className="button1">Начать снова</button>
                </form>
            </div>
        );
    }

    return (
        <div className="divContent">
            <h1 className="textInSite">Добро пожаловать в игру Виселица!</h1>
            <p className="textInSite">Отгадайте слово за {attempts} попыток.</p>
            <p className="textInSite">{displayWord()}</p>
            <div onChange={(e) => handleGuess(e.target.value)}>
                <Input />
            </div>
        </div>
    );
};

export default HiddenWord;
