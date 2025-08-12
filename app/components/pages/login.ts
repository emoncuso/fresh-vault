import { service } from '@ember/service';
import Component from '@glimmer/component';

import { task } from 'ember-concurrency';
import type SessionService from 'fresh-vault/services/session';

export interface PagesLoginSignature {
  // The arguments accepted by the component
  Args: {};
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

    this.session.authenticate('authenticator:token', { path, token });
  });
}
