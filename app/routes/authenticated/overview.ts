import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

export default class AuthenticatedOverviewRoute extends Route {
  @tracked health = {}
  @tracked sealStatus = {}
}
