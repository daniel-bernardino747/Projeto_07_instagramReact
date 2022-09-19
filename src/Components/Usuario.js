import { useState } from "react";

export default function Usuario(props) {
    const [name, setName] = useState(props.editName);
    const [photo, setPhoto] = useState(props.url);

    function PhotoPerfil() {
        return (
            <img
                onClick={
                    () => window.confirm("Deseja trocar de foto?")
                        ? setPhoto(prompt("Digite a URL da imagem que deseja:"))
                        : console.log("None")
                }
                src={photo}
                alt="User Image"
            />
        );
    };

    function IconEdit() {
        return (
            <ion-icon
                onClick={
                    () => window.confirm("Deseja trocar de nome?")
                        ? setName(prompt("Qual nome deseja usar?"))
                        : console.log("None")
                }
                name="pencil-outline"
            ></ion-icon>
        );
    };

    return (
        <div className="u-center-x u-display-flex">

            <div>
                <PhotoPerfil />
            </div>

            <div>
                <h1>{props.name}</h1>
                <div className="u-display-flex">

                    <h2>{name}</h2>
                    <IconEdit />

                </div>
            </div>

        </div>
    );
};