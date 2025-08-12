import Route from '@ember/routing/route';
import { service } from '@ember/service';

import type SessionService from 'fresh-vault/services/session';
import type Transition from '@ember/routing/transition';

export default class AuthenticatedRoute extends Route {
  @service declare readonly session: SessionService;
  beforeModel(transition: Transition) {
    this.session.requireAuthentication(transition, 'login');
  }
}
