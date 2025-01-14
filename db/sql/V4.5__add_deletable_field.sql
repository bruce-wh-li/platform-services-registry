BEGIN TRANSACTION;

ALTER TABLE profile 
ADD COLUMN IF NOT EXISTS pvc_deletability BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN IF NOT EXISTS namespace_deletability BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN IF NOT EXISTS pods_deletability BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN IF NOT EXISTS provisioner_deletion_checked BOOLEAN NOT NULL DEFAULT false;

ALTER TYPE request_type ADD VALUE 'delete' after 'edit';

END TRANSACTION;
