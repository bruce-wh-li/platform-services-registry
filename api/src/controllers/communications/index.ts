//
// Copyright © 2020 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { errorWithCode, logger } from "@bcgov/common-nodejs-utils";
import { Response } from "express";
import { subscribeUserToMessages } from "./helpers";

const communications = async (
  { body }: { body: any },
  res: Response
): Promise<void> => {
  try {
    if (body.length === 0) {
      throw new Error("No email addresses to subscribe");
    }

    Promise.all(body.map((email) => subscribeUserToMessages(email)));

    res.status(200).json("Subscribed users to communications");
  } catch (err) {
    const message = `Unable to subscribe user to provisioner communications`;
    logger.error(`${message}, err = ${err.message}`);

    throw errorWithCode(message, 500);
  }
};

export default communications;
