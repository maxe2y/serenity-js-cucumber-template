import {Then} from '@cucumber/cucumber';
import assert from 'assert';
import {existsSync} from 'fs';

Then('{word} folder should be created', function (path: string) {
    assert(existsSync(path), `Error, ${path} folder do not exist`);
});