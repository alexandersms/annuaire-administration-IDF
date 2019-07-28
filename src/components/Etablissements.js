import React from 'react';
import { Card } from 'semantic-ui-react';

const Etablissement = ({properties}) =>{
    const { Nom, CoordonnéesNum } = properties;
    return (
        <Card>
            <Card.Content>
                <Card.Header>{Nom}</Card.Header>

                { 
                    CoordonnéesNum.Téléphone.$t ? 
                <Card.Meta>Téléphone: {CoordonnéesNum.Téléphone.$t}</Card.Meta>
                : CoordonnéesNum.Téléphone ? 
                <Card.Meta>Téléphone {CoordonnéesNum.Téléphone}</Card.Meta> : undefined

                }

                {
                    CoordonnéesNum.Email ? 
                    <Card.Meta>Email: {CoordonnéesNum.Email} </Card.Meta>
                    : undefined
                }
                
            </Card.Content>
        </Card>
    )
}

export default Etablissement;