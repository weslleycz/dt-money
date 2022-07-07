import Style from "styled-components";

export const Conteiner = Style.div`
display: grid;
grid-template-columns:repeat(3, 1fr);
gap: 2rem;
margin-top: -10rem;

div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    color: var(--texte-title);
    border-radius: 0.25rem;
    box-shadow: 0px 1.5rem 4rem rgba(0, 0, 0, 0.06);

    header{
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    strong{
        margin-top: 1rem;
        display: block;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
    &.highlignt-background{
        background:var(--green);
        color:#fff;
    }
}
`;
