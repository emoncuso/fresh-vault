import Component from '@glimmer/component';
import { service } from '@ember/service';
import { on } from '@ember/modifier';

import { task } from 'ember-concurrency';
import { FormInput, Button, Tile } from 'carbon-components-ember/components';

import type SessionService from 'fresh-vault/services/session';

export interface PagesLoginSignature {
  // The arguments accepted by the component
  Args: unknown;
  // Any blocks yielded by the component
  Blocks: {
    default: []
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class PagesLogin extends Component<PagesLoginSignature> {
  @service declare readonly session: SessionService;

  login = task({ drop: true }, async (e: unknown) => {
    e.preventDefault();
  
    const fd = new FormData(e.target);

    const path = fd.get('path');
    const token = fd.get('token');

    console.log({path, token})

    // this.session.authenticate('authenticator:token', { path, token });
  });

  <template>
    <h1> Login </h1>

    <form method="POST" {{on "submit" this.login.perform}}>
      <Tile>
        <:content>
          <div>
            {{!-- <label for="path">Path</label>
            <input 
              id="path" 
              name="path" 
              type="text" 
              value="/"
              readonly
              autocomplete="off" 
            /> --}}
            <FormInput @label="Path" />
          </div>
          <div>
            {{!-- <label for="token">Token</label>
            <input 
              id="token" 
              name="token" 
              type="text" 
              required 
              aria-required="true" 
              autocomplete="off" 
            /> --}}
            <FormInput @label="Token" />
          </div>
          <Button @type="submit">
            Login
          </Button>
        </:content>
      </Tile>
    </form>
  </template>
}
