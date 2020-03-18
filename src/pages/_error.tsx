import Head from "next/head";
import React from "react";

import { withTranslation } from "../i18n";

const Page = ({ t }) => {
    return (
        <div>
            <Head>
                <title>{t("_error:title")}</title>
            </Head>
            Error
        </div>
    );
};

Page.getInitialProps = async () => ({
    namespacesRequired: ["common"],
});

export default withTranslation("common")(Page);
