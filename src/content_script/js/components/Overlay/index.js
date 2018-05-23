import { h, Component } from 'preact'
import OverlayUserFollow from '../OverlayUserFollow'
import OverlayUserUnfollow from '../OverlayUserUnfollow'
import OverlayDefault from '../OverlayDefault'

export default class extends Component {

    constructor() {
        super()
    }

    render(props, state) {

        let isUserPage = !!document.querySelector('main.content_7c39f .header_fb2c3')

        return (
        <div
            className='producthuntfollowers-overlay'>
            { isUserPage && <OverlayUserFollow onSet={props.onSet} /> }
            { isUserPage && <OverlayUserUnfollow onSet={props.onSet} /> }
            { !isUserPage && <OverlayDefault /> }
        </div>
        )
    }
}
