import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import DeleteFormFirstConfirmation from '../components/projectDelete/DeleteFormFirstConfirmation';
import DeleteFormSecondConfirmation from '../components/projectDelete/DeleteFormSecondConfirmation';
import ProvisionerCheckingPending from '../components/projectDelete/ProvisionerCheckingPending';
import DeleteFormFinalConfirmation from '../components/projectDelete/DeleteFormFinalConfirmation';
import { ROUTE_PATHS } from '../constants';
import { promptSuccessToastWithText } from '../utils/promptToastHelper';
import useRegistryApi from '../hooks/useRegistryApi';

interface ProjectDeletionModalInterface {
  licensePlate: string;
  profileId: string;
  closeDeletionModal: any;
}
export const ProjectDeletionModal: React.FC<ProjectDeletionModalInterface> = (props) => {
  const api = useRegistryApi();
  const { licensePlate, profileId, closeDeletionModal } = props;
  const [currentPage, setPage] = useState(1);
  const [goBackToDashboard, setGoBackToDashboard] = useState<boolean>(false);

  const nextPage = () => {
    setPage(currentPage + 1);
  };

  const previousPage = () => {
    setPage(currentPage - 1);
  };

  const onSubmit = async () => {
    try {
      await api.deleteProjectByProfileId(profileId);
    } catch (err: any) {
      const msg = 'Unable to Send deletion requets';
      throw new Error(`${msg}, reason = ${err.message}`);
    }
    promptSuccessToastWithText('Your deletion request was successful');
    setGoBackToDashboard(true);
  };
  if (goBackToDashboard) {
    return <Redirect to={ROUTE_PATHS.DASHBOARD} />;
  }
  return (
    <div>
      {currentPage === 1 && (
        <DeleteFormFirstConfirmation
          closeModal={closeDeletionModal}
          nextPage={() => nextPage()}
          licensePlate={licensePlate}
        />
      )}
      {currentPage === 2 && (
        <DeleteFormSecondConfirmation
          nextPage={() => nextPage()}
          previousPage={previousPage}
          licensePlate={licensePlate}
        />
      )}
      {currentPage === 3 && (
        <ProvisionerCheckingPending
          nextPage={() => nextPage()}
          closeModal={closeDeletionModal}
          licensePlate={licensePlate}
          profileId={profileId}
        />
      )}
      {currentPage === 4 && (
        <DeleteFormFinalConfirmation
          onSubmit={() => onSubmit()}
          previousPage={previousPage}
          licensePlate={licensePlate}
        />
      )}
    </div>
  );
};

export default ProjectDeletionModal;
