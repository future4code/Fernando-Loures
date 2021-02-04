import React from 'react'
import { goBackPage} from '../../Router/Coordinator'
import { useHistory } from "react-router-dom";
import { ContainerQuestion, P } from './styled';

export default function Question() {
    const history = useHistory()

    return (
        <ContainerQuestion>
            <h1>Dúvidas</h1>
            <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut ante nec ex elementum elementum.
                Duis condimentum, massa eget bibendum sagittis, sapien metus molestie ligula, eget scelerisque ipsum nisl ac ligula. Proin fermentum urna mi, eget dapibus metus elementum eget. Ut bibendum dui ac orci dapibus rhoncus. Proin gravida est nisl, a consequat nulla efficitur non. Nullam et imperdiet orci. Pellentesque sed pharetra velit. Pellentesque mattis nunc nulla, vel fermentum sapien volutpat a.
                Vivamus consectetur, nulla ut laoreet pharetra, lorem nisi dapibus ipsum, eget blandit orci eros vel mauris. Fusce maximus purus eget dapibus blandit.
             </P>
            <h3>Lorem ipsum dolor</h3>
             <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut ante nec ex elementum elementum.
              </P>
             <P>
                Duis condimentum, massa eget bibendum sagittis, sapien metus molestie ligula, eget scelerisque ipsum nisl ac ligula. Proin fermentum urna mi, eget dapibus metus elementum eget. Ut bibendum dui ac orci dapibus rhoncus. Proin gravida est nisl, a consequat nulla efficitur non. Nullam et imperdiet orci. Pellentesque sed pharetra velit. Pellentesque mattis nunc nulla, vel fermentum sapien volutpat a.
                Vivamus consectetur, nulla ut laoreet pharetra, lorem nisi dapibus ipsum, eget blandit orci eros vel mauris. Fusce maximus purus eget dapibus blandit.
             </P>
             <h3>Lorem ipsum dolor</h3>
             <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut ante nec ex elementum elementum.
                Duis condimentum, massa eget bibendum sagittis, sapien metus molestie ligula, eget scelerisque ipsum nisl ac ligula. Proin fermentum urna mi, eget dapibus metus elementum eget. Ut bibendum dui ac orci dapibus rhoncus. Proin gravida est nisl, a consequat nulla efficitur non. Nullam et imperdiet orci. Pellentesque sed pharetra velit. Pellentesque mattis nunc nulla, vel fermentum sapien volutpat a.
                Vivamus consectetur, nulla ut laoreet pharetra, lorem nisi dapibus ipsum, eget blandit orci eros vel mauris. Fusce maximus purus eget dapibus blandit.
             </P>
            <button onClick={() => goBackPage(history)}>voltar</button>

        </ContainerQuestion>
    )
}