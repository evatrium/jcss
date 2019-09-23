// webStorm highlighting flag to highlight css in js
//language=CSS
export const styles = jcss`
    :host {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        user-select: none;
        flex-wrap: wrap;
    }

    .foo {
        flex: 1;
    }

    .bar {
        flex: 1 1;
    }

    .foz {
        flex: 1 1 0;
    }

    .baz {
        flex: 1 1 0px;
    }
`;