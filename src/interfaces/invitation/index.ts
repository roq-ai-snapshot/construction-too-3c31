import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  company_id: string;
  invitee_id: string;
  inviter_id: string;
  status?: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user_invitation_invitee_idTouser?: UserInterface;
  user_invitation_inviter_idTouser?: UserInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  invitee_id?: string;
  inviter_id?: string;
  status?: string;
}
