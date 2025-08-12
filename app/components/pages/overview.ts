import { service } from '@ember/service';
import Component from '@glimmer/component';
import type ClusterService from 'fresh-vault/services/cluster';
import type SessionService from 'fresh-vault/services/session';

export interface PagesOverviewSignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: []
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class PagesOverview extends Component<PagesOverviewSignature> {
  @service declare readonly cluster: ClusterService;
  @service declare readonly session: SessionService;

  // get isDr() {
  //   return
  // }

  // get isPr() {

  // }

  // get isSecondary() {

  // }

  get backendVersion() {
    return this.cluster.health.version;
  }

  logout = async () => {
    this.session.invalidate();
  }
}
