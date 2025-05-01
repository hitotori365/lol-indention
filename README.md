# Lol indention

サイト中に含まれるパチンコという文字列を必ずパで改行し、生活に笑いを与えるChrome拡張機能

## 機能

閲覧中のウェブページに含まれる「パチンコ」という単語を検出し、「パ」の後で改行処理を行います。

## プライバシーポリシー (Privacy Policy)

**最終更新日:** 2025年5月1日

本拡張機能「Lol indention」（以下、本拡張機能）は、ユーザーのプライバシーを尊重します。

### 収集する情報

本拡張機能は、ユーザーが閲覧しているウェブページのコンテンツ（テキスト情報）にアクセスします。これは、ページ内に含まれる特定の文字列（「パチンコ」）を検出し、表示を変更する目的でのみ行われます。

### 情報の利用目的

収集したウェブページのテキスト情報は、以下の目的でのみ利用します。

*   ウェブページ内の「パチンコ」という文字列を特定するため
*   特定した文字列の「パ」の後で改行処理を行うため

上記以外の目的で、閲覧ページのコンテンツ情報を利用することはありません。

### 情報の保存・第三者提供

本拡張機能は、アクセスしたウェブページのコンテンツ情報を**保存しません**。また、収集した情報を開発者を含む**第三者に送信、共有、または販売することも一切ありません**。すべての処理はユーザーのローカル環境（ブラウザ内）で完結します。

### 問い合わせ先

本プライバシーポリシーに関するお問い合わせは、[ひととり](https://x.com/hitotori_365)までお願いします。

### ポリシーの変更

本プライバシーポリシーは、法令の変更や拡張機能のアップデートに伴い改定されることがあります。変更があった場合は、このREADME上で通知します。

---

**(English)**

## Privacy Policy

**Last Updated:** 2025-05-01

This Chrome Extension "Lol indention" (hereinafter referred to as "this extension") respects your privacy.

### Information Collected

This extension accesses the content (text information) of the web pages you browse. This is done solely for the purpose of detecting a specific string ("パチンコ") within the page and modifying its display.

### Purpose of Use

The collected web page text information is used only for the following purposes:

*   To identify the string "パチンコ" within the web page.
*   To insert a line break after the character "パ" in the identified string.

The content information of the browsed pages will not be used for any other purpose.

### Data Storage and Third-Party Sharing

This extension **does not save** the web page content information it accesses. Furthermore, the collected information **is not transmitted, shared, or sold to any third party**, including the developer. All processing is completed locally within the user's browser.

### Contact Information

For inquiries regarding this privacy policy, please contact [hitotori](https://x.com/hitotori_365). (Optional. Remove this line if not needed.)

### Changes to This Policy

This privacy policy may be revised due to changes in laws or updates to the extension. Any changes will be notified in this README.

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
# lol-indention
